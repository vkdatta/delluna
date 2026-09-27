export const name="crown-light";
export const id="dl_2fe6f0804c8541539b2e";
export const url=new URL("../icons/crown-light.svg?v=c1d34e09cc312bb6b64c0b081b082c37b738e417f87265cbf2c51850eec3547a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
