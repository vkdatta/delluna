export const name="pull";
export const id="dl_8ddfcd558976d128dbed";
export const url=new URL("../icons/pull.svg?v=3bd516881bf3c8418c816d24b7f23d5fed9617ca76fb29f310c92bd01a451bbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
