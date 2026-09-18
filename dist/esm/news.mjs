export const name="news";
export const id="dl_d0adeef6020a4a29bea4";
export const url=new URL("../icons/news.svg?v=c8389008a974cbf705bb12d389a2ef5fe4524e02acfb191ba626340fcae919fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
