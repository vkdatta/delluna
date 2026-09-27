export const name="equalizer-light";
export const id="dl_d9e1a01c0ca447cc8a47";
export const url=new URL("../icons/equalizer-light.svg?v=98b4baaccc6e4180e206ef220872c9d8564ceaeb1191f0bba3bde58456a61a93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
