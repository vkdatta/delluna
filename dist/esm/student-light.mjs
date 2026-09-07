export const name="student-light";
export const id="dl_d2ee544737af47cf8bb8";
export const url=new URL("../icons/S/student-light.svg?v=e655d6464f7849d93117a36c79e064b519002d93fdf50e0a9205bac770377780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
