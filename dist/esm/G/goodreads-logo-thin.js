export const name="goodreads-logo-thin";
export const id="dl_79c04c8d4e7844bbb2b1";
export const url=new URL("../../icons/G/goodreads-logo-thin.svg?v=b795c654ddbedc65774723eb3d4bdf0e0e30731b825219b7feb073a2249ee1ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
