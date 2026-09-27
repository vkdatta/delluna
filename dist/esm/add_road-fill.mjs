export const name="add_road-fill";
export const id="dl_30e501c7457595c5eea5";
export const url=new URL("../icons/add_road-fill.svg?v=6b5f7ab4bf2480e58aa417cf468a6cf5274e806fef46adc1f8bec079148222e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
