export const name="joystick-bold";
export const id="dl_4ef4d7d40ad54c34843e";
export const url=new URL("../icons/joystick-bold.svg?v=09728ae0f5fe88d8fa0b5f44e42d31749efff41765d1de8b6cff1fdbc1fa0ea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
