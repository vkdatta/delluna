export const name="shuffle-simple-bold";
export const id="dl_2bbbc4df954cea1ff22d";
export const url=new URL("../icons/shuffle-simple-bold.svg?v=1c9a87173c04b1c84d2235f199d368de85673a5265552ff62d4db7ece6f484b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
