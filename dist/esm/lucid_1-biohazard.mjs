export const name="lucid_1-biohazard";
export const id="dl_4a02d0212b7a4f4f8921";
export const url=new URL("../icons/lucid_1-biohazard.svg?v=627c33d6e6cbc79efc77f9ebec9aae0253e1fc23733a8b21d80597ecf604bc5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
