export const name="input_circle-fill";
export const id="dl_6e02c18666ba0c57cc63";
export const url=new URL("../icons/input_circle-fill.svg?v=fbcfdfd42ee6590e18ab1e3676aedd3a581891e8c0e6f9dd3afa3fdd902f4997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
