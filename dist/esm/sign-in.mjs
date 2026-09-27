export const name="sign-in";
export const id="dl_16ca80f5afe46eef8d80";
export const url=new URL("../icons/sign-in.svg?v=d4dfeab501a010315b87dbfffc09d550fc1750932d62b8910ebeb7307a2c5eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
