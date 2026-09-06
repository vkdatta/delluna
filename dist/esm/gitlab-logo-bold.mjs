export const name="gitlab-logo-bold";
export const id="dl_5672cf95c48240749a16";
export const url=new URL("../icons/gitlab-logo-bold.svg?v=734076e733c1e0217dc7d9f04cfe01dd8e688b8b0b4c53da83b8cfb93309edd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
