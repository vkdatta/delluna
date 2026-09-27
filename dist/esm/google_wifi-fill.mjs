export const name="google_wifi-fill";
export const id="dl_ef67c6924490615ebcd2";
export const url=new URL("../icons/google_wifi-fill.svg?v=c7df011f0af7efd97032c967c6209166ed5bc87e5fc6547f5b90476eaea9ed33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
