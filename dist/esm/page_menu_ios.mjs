export const name="page_menu_ios";
export const id="dl_777901521603449ea328";
export const url=new URL("../icons/page_menu_ios.svg?v=8f96e909b4b1637053a150da82af26cadb63cbf949d078c932cf8a95c5f7f178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
