export const name="user-rectangle-bold";
export const id="dl_46b28f8f5e4a8255efde";
export const url=new URL("../icons/user-rectangle-bold.svg?v=b73c2b797fdc35846e6aff816cb377709020da985a11f5f680b00292a079e94d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
