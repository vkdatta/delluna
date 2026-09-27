export const name="lucid_3-notebook-text";
export const id="dl_eacf20dbbb4349d9b904";
export const url=new URL("../icons/lucid_3-notebook-text.svg?v=62092f6ecf9eed15f99425c00acdac35a8c4637f642d7cda7eb2c0aab4767261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
