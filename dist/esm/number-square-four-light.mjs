export const name="number-square-four-light";
export const id="dl_de25a7984a3741819e67";
export const url=new URL("../icons/number-square-four-light.svg?v=f922096f144cab27240a742cdda2cab77f4f61e96d917956de8e29b3adaf4cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
