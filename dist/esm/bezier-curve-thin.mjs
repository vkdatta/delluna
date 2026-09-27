export const name="bezier-curve-thin";
export const id="dl_27d61ebe39944f86a7b8";
export const url=new URL("../icons/bezier-curve-thin.svg?v=8ba9bebf7569117a4fe24beb0d4340ceb7249a0a9e423c858b7f42c36d376fd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
