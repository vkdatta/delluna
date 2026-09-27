export const name="not_started-fill";
export const id="dl_9d75ba06c066743bc471";
export const url=new URL("../icons/not_started-fill.svg?v=fde909f32518db58ef2c3ad7b130002c95b61db5f6dc03a9ee4cd4a3ddeb0922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
