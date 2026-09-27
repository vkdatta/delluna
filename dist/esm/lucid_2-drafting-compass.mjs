export const name="lucid_2-drafting-compass";
export const id="dl_bd628def0e5f468c9847";
export const url=new URL("../icons/lucid_2-drafting-compass.svg?v=e58300b17ef9836e2ac89cbea4ceb892a99339ca75b81c8dd4de24b6f21f893e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
