export const name="person_add";
export const id="dl_5fbd13fdb7c2c625beba";
export const url=new URL("../icons/person_add.svg?v=eccfe01e38bcf324aa2c7432b1c7a4189c7ec30c6831b52c4953db22acbf2e9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
