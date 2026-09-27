export const name="subtitles-slash-bold";
export const id="dl_d1d697c60fc95b254d82";
export const url=new URL("../icons/subtitles-slash-bold.svg?v=79c84cbc57b0fd37bff0e5a4374a35f97a218d9da5c507c6d763f24b41e44c58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
