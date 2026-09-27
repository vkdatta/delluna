export const name="door-light";
export const id="dl_af9196dcec504868b54d";
export const url=new URL("../icons/door-light.svg?v=f1ad28ff9838e44008fb7fbe6664aca8274d11533085b8d335d05d4fead77abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
