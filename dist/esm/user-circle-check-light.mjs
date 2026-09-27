export const name="user-circle-check-light";
export const id="dl_29eb9666808cb2cd21fc";
export const url=new URL("../icons/user-circle-check-light.svg?v=dd53d7adc216febadf69ffdf7f8b5ff04b16b05953102a4eab4ae7e985e33f4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
