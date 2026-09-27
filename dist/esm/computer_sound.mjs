export const name="computer_sound";
export const id="dl_d46dd2a434dc547f63c8";
export const url=new URL("../icons/computer_sound.svg?v=d6420ea6a2899583edca15eb3ae127d9c7f3ab47aaaa655f3931065acfa93c4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
