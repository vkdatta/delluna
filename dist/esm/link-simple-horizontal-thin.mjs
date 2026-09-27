export const name="link-simple-horizontal-thin";
export const id="dl_fafeed5a059a490782f6";
export const url=new URL("../icons/link-simple-horizontal-thin.svg?v=357b325db94d7610224f736b0393c0d967f25d34505b756cd1553044c81a2f79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
