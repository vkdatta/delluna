export const name="movie_off";
export const id="dl_655f8500857ac8e8fc21";
export const url=new URL("../icons/movie_off.svg?v=c365b8f8d45ee2870ade353b64d2abe0ca32de525dfda0e6e723ae9ec2617f63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
