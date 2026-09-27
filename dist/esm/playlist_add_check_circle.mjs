export const name="playlist_add_check_circle";
export const id="dl_0d188cfd522a6ac8cdd2";
export const url=new URL("../icons/playlist_add_check_circle.svg?v=d1a7105ebf3862ce5df404a3a5669a076c6d3778010f9ea3da02d23b4c0637ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
