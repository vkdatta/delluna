export const name="tennis-ball-thin";
export const id="dl_3f32f40373354bc990e5";
export const url=new URL("../icons/T/tennis-ball-thin.svg?v=af4d90465e2a27bf603d38fbc6d378eb627cf1c2204fbd4c35851f4e3114bdd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
