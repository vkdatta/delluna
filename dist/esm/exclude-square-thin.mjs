export const name="exclude-square-thin";
export const id="dl_9879eda727a84bcba484";
export const url=new URL("../icons/exclude-square-thin.svg?v=58c4bde03225abcab9217f97b8a37feeac5b2c7c8c0f00fddcb5967b972c8925",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
