export const name="globe-simple-x-light";
export const id="dl_861459b19b8545d891e5";
export const url=new URL("../icons/globe-simple-x-light.svg?v=9a79c130712ad23556a4c998d49222401ac872c992af8ed6c80b9317802d4de1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
