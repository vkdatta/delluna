export const name="video-conference";
export const id="dl_e1250baeb4fcb826e997";
export const url=new URL("../icons/video-conference.svg?v=45e1e052a463a42e5f6d6e4920b61f30f8ac5213d9e56a6afe71f1f211bae4a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
