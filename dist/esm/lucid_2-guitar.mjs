export const name="lucid_2-guitar";
export const id="dl_63c8daf2b0bf479484ab";
export const url=new URL("../icons/lucid_2-guitar.svg?v=42520456d1e33d2467ba77d14631173ab3f12e34e2bf3e6d25bd427ea05504f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
