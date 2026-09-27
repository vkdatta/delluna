export const name="lucid_3-square-dashed-bottom";
export const id="dl_5f4c2348eee84ccc86e9";
export const url=new URL("../icons/lucid_3-square-dashed-bottom.svg?v=28162bcc2bdaf8f95f115e4815e25cef9ce338bc7c6330a76c77ad0385ba51a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
