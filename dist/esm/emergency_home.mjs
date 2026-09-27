export const name="emergency_home";
export const id="dl_4b6d94b71bf26f57c852";
export const url=new URL("../icons/emergency_home.svg?v=a88b1da2d38c3c0c25ee49fa327d3e687e242c079f63c995318f6437ddb80d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
