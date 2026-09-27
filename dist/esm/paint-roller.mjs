export const name="paint-roller";
export const id="dl_15402e210d0549478e8d";
export const url=new URL("../icons/paint-roller.svg?v=808924c3c6468a0802333307978beaa279a1d50194f251303db3be0012728b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
