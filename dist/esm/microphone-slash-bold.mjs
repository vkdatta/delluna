export const name="microphone-slash-bold";
export const id="dl_66400184260b4bf099e2";
export const url=new URL("../icons/microphone-slash-bold.svg?v=66cfa0c9227d9fc01b1239ae94a12b0510eada03fc73f6b429e9eb14baff09c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
