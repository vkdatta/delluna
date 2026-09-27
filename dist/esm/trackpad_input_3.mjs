export const name="trackpad_input_3";
export const id="dl_b157984c73acf0c86215";
export const url=new URL("../icons/trackpad_input_3.svg?v=71ad953c450b73f5c231d412695c96a9a2c0f8c2de63246212bdbfb71a8a7f26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
