export const name="lock_person";
export const id="dl_23fc1beeb16acf3f2a63";
export const url=new URL("../icons/lock_person.svg?v=86c293c3fb85e3e9db5f0989899eb23d8d6fa86412ebcad03f74e46f1a51a89c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
