export const name="arrow-circle-up-left-thin";
export const id="dl_5b268098f7ab409d847e";
export const url=new URL("../icons/arrow-circle-up-left-thin.svg?v=660099dbfeb52eea923eeb2e70c97ff90090a5cf306fc208995010c5f56b1fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
