export const name="circles";
export const id="dl_f03a4d1d9ca95b06997c";
export const url=new URL("../icons/circles.svg?v=ca59c228ddb1cc3313777afa6b80edc9fd2de4f50e074c07ad6a3f3560706820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
