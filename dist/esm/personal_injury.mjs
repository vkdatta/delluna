export const name="personal_injury";
export const id="dl_2569b17f0426946338d9";
export const url=new URL("../icons/personal_injury.svg?v=82ed0d8f428282f527e8af8f67ca7cf546e705ad44e22fbb7959275f07695dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
