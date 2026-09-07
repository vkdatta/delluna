export const name="baseball-cap-thin";
export const id="dl_6522988c3f9b40ad97ba";
export const url=new URL("../icons/baseball-cap-thin.svg?v=45c6bfebd09c94a92e15ea1df9b4577430d65bffe31d01d17e3d8b1eea2c37da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
