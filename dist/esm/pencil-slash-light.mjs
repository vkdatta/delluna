export const name="pencil-slash-light";
export const id="dl_fad2a7a47b284e76ad8f";
export const url=new URL("../icons/pencil-slash-light.svg?v=38fe56645be17eafe0e9868b83f467d9875874c1c1de4a07448754813e9639d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
