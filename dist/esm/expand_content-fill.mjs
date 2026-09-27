export const name="expand_content-fill";
export const id="dl_6716a77b7aab2624403d";
export const url=new URL("../icons/expand_content-fill.svg?v=4dd4ecf247dad8cf14faae3f8e94defc8c65a0360bfaed9beb501c7ed3c79613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
