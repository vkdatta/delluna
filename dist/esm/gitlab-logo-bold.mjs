export const name="gitlab-logo-bold";
export const id="dl_5672cf95c48240749a16";
export const url=new URL("../icons/gitlab-logo-bold.svg?v=3f33c7ebdd902dcb3b0a68607d212298d1fb13791a81aa48686b3efb8aba9283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
