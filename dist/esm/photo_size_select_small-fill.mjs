export const name="photo_size_select_small-fill";
export const id="dl_ec0863b1145a44b3b1dc";
export const url=new URL("../icons/photo_size_select_small-fill.svg?v=7642edae091d6646f6fe0272c27be7c14aaa7a385f2f1c401d7ceabca8235da0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
