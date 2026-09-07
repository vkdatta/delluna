export const name="split-vertical-thin";
export const id="dl_98e4940808da4ab5900b";
export const url=new URL("../icons/S/split-vertical-thin.svg?v=2630c0fb0ede901811728e7f563239c2030baf9b8dc6e94ad10fac3027b1fa1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
