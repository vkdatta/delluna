export const name="horse-light";
export const id="dl_7c6b3a3598aa4e26bc02";
export const url=new URL("../icons/horse-light.svg?v=2d5236d35074c6009af95712a3a579b7e19453b77d708a07f36d96866e81df5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
