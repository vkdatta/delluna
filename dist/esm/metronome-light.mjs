export const name="metronome-light";
export const id="dl_c4db1bdd370944c2ba30";
export const url=new URL("../icons/metronome-light.svg?v=e8487b95673a391f40746e9c2a34f6eef7f2ff47f1872d65e16da3609da8a201",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
