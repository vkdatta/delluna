export const name="umbrella-thin";
export const id="dl_7b3baed0ce854cf18242";
export const url=new URL("../icons/U/umbrella-thin.svg?v=479b1e221a938598b4ee7f69b7eba07ea31d9c3f742381274d98014855535bba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
