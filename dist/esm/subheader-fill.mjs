export const name="subheader-fill";
export const id="dl_b9da295c7ca4e092644a";
export const url=new URL("../icons/subheader-fill.svg?v=b7140c5da887fb36d30fd11ea071e33aadc56c769f827e3ef871baa15bff5ee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
