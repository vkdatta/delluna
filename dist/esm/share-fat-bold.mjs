export const name="share-fat-bold";
export const id="dl_07f5a04c7ae392070a13";
export const url=new URL("../icons/share-fat-bold.svg?v=9002437da5afea346f607efd705c65b05ff774e4654019a347ce4fa4a1156159",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
