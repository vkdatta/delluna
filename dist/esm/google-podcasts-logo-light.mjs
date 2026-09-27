export const name="google-podcasts-logo-light";
export const id="dl_98fd7c42283e456fa452";
export const url=new URL("../icons/google-podcasts-logo-light.svg?v=58d5d0b6619c6c901a7c043161a44ef0117b431781ea46d7f51a8b79814fe6d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
