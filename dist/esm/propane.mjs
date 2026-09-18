export const name="propane";
export const id="dl_4ab4090312e54f58a488";
export const url=new URL("../icons/P/propane.svg?v=fce8a019c9719895b16ce4e869dc97cda2b01d4fa73e0dd1fa83e73cd135bd45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
