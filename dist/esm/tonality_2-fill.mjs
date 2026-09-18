export const name="tonality_2-fill";
export const id="dl_a59a111aa39b4ba1b28b";
export const url=new URL("../icons/tonality_2-fill.svg?v=4cf4f2f6ba90e9f2397de3a315bfad2c2c37cb40fa656bfa8c8c440f78b6d5f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
