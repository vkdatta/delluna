export const name="file-c-thin";
export const id="dl_bb92bc4e98ae4b2d94fb";
export const url=new URL("../icons/file-c-thin.svg?v=aaba526e0f84ad505e40aada27fb684e9ad3cb35cb8e6d9f9ae704f06bfac095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
